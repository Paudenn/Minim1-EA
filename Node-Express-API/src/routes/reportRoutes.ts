import {Request, response, Response, Router} from 'express';

import {Report, ReportModel} from "../models/Report";
import { User, UserModel } from "../models/User";


class ReportRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes(); //This has to be written here so that the method can actually be configured when called externally.
    }

    public async getReports(req: Request, res: Response) : Promise<void> { //It returns a void, but internally it's a promise.
        const allReports = await ReportModel.find();
        if (allReports.length == 0){
            res.status(404).send("There are no reports yet!")
        }
        else{
            res.status(200).send(allReports);
        }
    }

    public async getReportById(req: Request, res: Response) : Promise<void> {
        const reportFound = await ReportModel.findOne({_id: req.params.id});
        if(reportFound == null){
            res.status(404).send("The report doesn't exist!");
        }
        else{
            res.status(200).send(reportFound);
        }
    }

    public async addReport(req: Request, res: Response) : Promise<void> {
        try {
            console.log(req.body);
            const { title, description, typeReport, solved} =
              req.body;
            const { userId } = req.params;
            const user: User | null = await UserModel.findOne({
              id: userId,
            });
            if (user == null || user.id != userId) {
              res.status(404).send({ message: "Error. User not found." });
              return;
            }

            const newReport = new ReportModel({
              user: user,
              description: description,
              title: title,
              typeReport: typeReport,
              solved: solved,
            });

            await newReport.save();
            UserModel.findOneAndUpdate(
             
              { $push: { ReportRoutes: newReport } },
              function (error, success) {
                if (error) {
                  res.status(500).send({ message: `Server error: ${error}` });
                  return;
                }
              }
            );
            res.status(201).send(newReport);
          } catch (e) {
            res
              .status(500)
              .send({ message: `Server error adding user to Report: ${e}` });
          }
        }
            

    public async updateReport(req: Request, res: Response) : Promise<void> {
        const reportToUpdate = await ReportModel.findOneAndUpdate ({_id: req.params.id}, req.body);
        if(reportToUpdate == null){
            res.status(404).send("The report doesn't exist!");
        }
        else{
            res.status(200).send('Updated!');
        }
    }

    public async deleteReport(req: Request, res: Response) : Promise<void> {
        const reportToDelete = await ReportModel.findOneAndDelete ({_id:req.params.id}, req.body);
        if (reportToDelete == null){
            res.status(404).send("The report doesn't exist!")
        }
        else{
            res.status(200).send('Deleted!');
        }
    } 
    routes() {
        this.router.get('/', this.getReports);
        this.router.get('/:id', this.getReportById);
        this.router.post('/', this.addReport);
        this.router.put('/:id', this.updateReport);
        this.router.delete('/:id', this.deleteReport);
    }
}
const reportRoutes = new ReportRoutes();

export default reportRoutes.router;