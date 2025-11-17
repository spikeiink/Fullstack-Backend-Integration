import * as productService from "../services/productService";

export async function list(req, res) {
    return res.json({ products: [] });
}


export async function create(req, res) {
    const result = await productService.create(req.validated);
    return res.json(result);
}