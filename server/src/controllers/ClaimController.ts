// import prisma client
import prisma from "../../prisma/client";

/*
 * Getting all claims
 */
export async function getClaims() {
    try {
        const claims = await prisma.claim.findMany({
            orderBy: {
                id: "desc"
            }
        });
        return {
            success: true,
            message: "Claims fetched successfully",
            data: claims
        }
    } catch (error: unknown) {
        console.log(`Error while fetching claims: ${error}`);
    }
}

/*
 * Getting claim by id
 */
export async function getClaimById(id: number) {
    try {
        const claim = await prisma.claim.findUnique({
            where: {
                id
            }
        });
        return {
            success: true,
            message: `Claim for id ${id} fetched successfully`,
            data: claim
        }
    } catch (error: unknown) {
        console.log(`Error while fetching claim: ${error}`);
    }
}

/*
 * Deleting a claim
 */
export async function deleteClaim(id: number) {
    try {
        const claim = await prisma.claim.delete({
            where: {
                id
            }
        });
        return {
            success: true,
            message: `Claim for id ${id} deleted successfully`,
            data: claim
        }
    } catch (error: unknown) {
        console.log(`Error while deleting claim: ${error}`);
    }
}

/*
 * Creating new claim
 */
export async function createClaim(options: {
    productBarcode: string;
    customerId: number;
    description?: string;
    status?: string;
}) {
    try {
        const {productBarcode, customerId, description, status} = options;

        const claim = await prisma.claim.create({
            data: {
                productBarcode,
                customerId,
                description,
                status
            }
        });
        return {
            success: true,
            message: "Claim created successfully",
            data: claim
        }
    } catch (error: unknown) {
        console.log(`Error while creating claim: ${error}`);
    }
}

/*
 * Updating a claim
 */
export async function updateClaim(id: number, options: {
    productBarcode: string;
    customerId: number;
    description?: string;
    status?: string;
}) {
    try {
        const {productBarcode, customerId, description, status} = options;
        const claim = await prisma.claim.update({
            where: {
                id
            },
            data: {
                productBarcode,
                customerId,
                ...(description ? {description} : {}),
                ...(status ? {status} : {})
            }
        });
        return {
            success: true,
            message: `Claim for id ${id} updated successfully`,
            data: claim
        }
    } catch (error: unknown) {
        console.log(`Error while updating claim: ${error}`);
    }
}

/*
 * Getting claim by product barcode
 */
export async function getClaimByProductBarcode(barcode: string) {
    try {
        const claim = await prisma.claim.findUnique({
            where: {
                productBarcode: barcode
            },
            include: {
                customer: true,
                product: true
            }
        });
        return {
            success: true,
            message: `Claim for barcode ${barcode} fetched successfully`,
            data: claim
        }
    } catch (error: unknown) {
        console.log(`Error while fetching claim: ${error}`);
    }
}
