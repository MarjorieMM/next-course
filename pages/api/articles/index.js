//to make database calls (you can use prisma (orm))
import { articles } from "../../../data";

export default function handler(req, res) {
	res.status(200).json(articles);
}
