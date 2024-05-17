// import elysia
import {Elysia, t} from "elysia";
import {
    createProduct,
    deleteProduct,
    getProductByBarcode,
    getProducts,
    updateProduct
} from "../controllers/ProductController";

const ProductRouter = new Elysia({prefix: '/products'})
    .get('/', () => getProducts())
    .post('/', ({body}) => createProduct(body as {
        name: string;
        description?: string;
        price: number;
        priceAfterDiscount?: number;
        purchasePrice?: number;
        warrantyPeriod: number;
        type?: string;
        status?: string;
    }), {
        body: t.Object({
            name: t.String({minLength: 3, maxLength: 255, required: true}),
            price: t.Number({required: true}),
            warrantyPeriod: t.Number({required: true}),
        })
    })
    .get('/:barcode', ({params: {barcode}}) => getProductByBarcode(barcode), {
        params: t.Object({
            barcode: t.String({required: true})
        })
    })
    .patch('/:barcode', ({params: {barcode}, body}) => updateProduct(barcode, body), {
        params: t.Object({
            barcode: t.String({required: true})
        }),
        body: t.Object({
            name: t.String({minLength: 3, maxLength: 255}),
            description: t.String({maxLength: 255}),
            price: t.Number(),
            priceAfterDiscount: t.Number(),
            purchasePrice: t.Number(),
            warrantyPeriod: t.Number(),
            type: t.String({maxLength: 255}),
            status: t.String({maxLength: 255}),
        })
    })
    .delete('/:barcode', ({params: {barcode}}) => deleteProduct(barcode), {
        params: t.Object({
            barcode: t.String({required: true})
        })
    });

export default ProductRouter;

