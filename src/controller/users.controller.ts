const users = require("../../data/users.json");
import { Request, Response } from "express"


class UsersController {

   static get = async (req: Request, res: Response) => {
      try {
         const items: [] = users;
         const page: number = parseInt(req.params.page)
         const per_page: number = parseInt(req.params.per_page)

         const offset: number = (page - 1) * per_page;

         const paginatedItems = items.slice(offset).slice(0, per_page);

         const total_pages: number = Math.ceil(items.length / per_page);

         return res.status(200).json({
            page: page,
            per_page: per_page,
            pre_page: page - 1 ? page - 1 : null,
            next_page: (total_pages > page) ? page + 1 : null,
            total: items.length,
            total_pages: total_pages,
            data: paginatedItems
         })
      } catch (err) {
         return res.status(400).json({ err })
      }
   }
}

export default UsersController;