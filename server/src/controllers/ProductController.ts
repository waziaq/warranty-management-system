// import prisma client
import prisma from "../../prisma/client";

/*
 * Getting all products
 */
export async function getProducts() {
    try {
        const products = await prisma.product.findMany({
            orderBy: {
                id: "desc"
            }
        });
        return {
            success: true,
            message: "Products fetched successfully",
            data: products
        }
    } catch (error: unknown) {
        console.log(`Error while fetching products: ${error}`);
    }
}

/*
 * Creating new product
 */
export async function createProduct(options: {
    name: string;
    description?: string;
    price: number;
    purchaseDate?: Date;
    warrantyPeriod: number;
    warrantyExpiredDate?: Date;
    type?: string;
    status?: string;
}) {
    try {
        const {name, description, price, purchaseDate, warrantyPeriod, warrantyExpiredDate, type, status} = options;

        // generate barcode using uuid
        const barcode = crypto.randomUUID();

        // create product
        const product = await prisma.product.create({
            data: {
                barcode,
                name,
                description,
                price,
                purchaseDate,
                warrantyExpiredDate,
                warrantyPeriod,
                type,
                status
            }
        });

        return {
            success: true,
            message: "Product created successfully",
            data: product
        }
    } catch (error: unknown) {
        console.log(`Error while creating product: ${error}`);
    }
}

/*
 * Getting product by barcode
 */
export async function getProductByBarcode(barcode: string) {
    try {
        const product = await prisma.product.findUnique({
            where: {
                barcode
            }
        });
        return {
            success: true,
            message: `Product for barcode ${barcode} fetched successfully`,
            data: product
        }
    } catch (error: unknown) {
        console.log(`Error while fetching product: ${error}`);
    }
}

/*
 * Updating a product
 */
export async function updateProduct(barcode: string, options: {
    name: string;
    description?: string;
    price: number;
    purchaseDate?: Date;
    warrantyPeriod: number;
    warrantyExpiredDate?: Date;
    type?: string;
    status?: string;
}) {
    try {
        const {name, description, price, purchaseDate, warrantyExpiredDate, warrantyPeriod, type, status} = options;

        // update product
        const product = await prisma.product.update({
            where: {
                barcode
            },
            data: {
                ...(name ? {name} : {}),
                ...(description ? {description} : {}),
                ...(price ? {price} : {}),
                ...(purchaseDate ? {purchaseDate} : {}),
                ...(warrantyExpiredDate ? {warrantyExpiredDate} : {}),
                ...(warrantyPeriod ? {warrantyPeriod} : {}),
                ...(type ? {type} : {}),
                ...(status ? {status} : {}),
            }
        });

        return {
            success: true,
            message: `Product for barcode ${barcode} updated successfully`,
            data: product
        }
    } catch (error: unknown) {
        console.log(`Error while updating product: ${error}`);
    }
}

/*
 * Deleting a product
 */
export async function deleteProduct(barcode: string) {
    try {
        const product = await prisma.product.delete({
            where: {
                barcode
            }
        });
        return {
            success: true,
            message: `Product for barcode ${barcode} deleted successfully`,
            data: product
        }
    } catch (error: unknown) {
        console.log(`Error while deleting product: ${error}`);
    }
}