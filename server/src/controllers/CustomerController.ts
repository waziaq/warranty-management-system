// import prisma client
import prisma from "../../prisma/client";

/*
 * Getting all customers
 */
export async function getCustomers() {
    try {
        const customers = await prisma.customer.findMany({
            orderBy: {
                id: "desc"
            }
        });
        return {
            success: true,
            message: "Customers fetched successfully",
            data: customers
        }
    } catch (error: unknown) {
        console.log(`Error while fetching customers: ${error}`);
    }
}

/*
 * Creating new customer
 */
export async function createCustomer(options: {
    name: string;
    email: string;
    phone: string;
    address?: string;
}) {
    try {
        const {name,email, address, phone} = options;
        // create customer
        const customer = await prisma.customer.create({
            data: {
                name,
                email,
                address,
                phone
            }
        });
        return {
            success: true,
            message: "Customer created successfully",
            data: customer
        }
    } catch (error: unknown) {
        console.log(`Error while creating customer: ${error}`);
    }
}


/*
 * Deleting a customer
 */
export async function deleteCustomer(id: number) {
    try {
        const customer = await prisma.customer.delete({
            where: {
                id
            }
        });
        return {
            success: true,
            message: `Customer for id ${id} deleted successfully`,
            data: customer
        }
    } catch (error: unknown) {
        console.log(`Error while deleting customer: ${error}`);
    }
}


/*
 * Getting customer by id
 */
export async function getCustomerById(id: number) {
    try {
        const customer = await prisma.customer.findUnique({
            where: {
                id
            }
        });
        return {
            success: true,
            message: `Customer for id ${id} fetched successfully`,
            data: customer
        }
    } catch (error: unknown) {
        console.log(`Error while fetching customer: ${error}`);
    }
}


/*
 * Updating a customer
 */
export async function updateCustomer(id: number, options: {
    name: string;
    email: string;
    phone: string;
    address?: string;
}) {
    try {
        const {name, email, address, phone} = options;
        const customer = await prisma.customer.update({
            where: {
                id
            },
            data: {
                name,
                email,
                address,
                phone
            }
        });
        return {
            success: true,
            message: `Customer for id ${id} updated successfully`,
            data: customer
        }
    } catch (error: unknown) {
        console.log(`Error while updating customer: ${error}`);
    }
}