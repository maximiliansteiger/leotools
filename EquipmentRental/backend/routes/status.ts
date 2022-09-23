import express from "express";
const router = express.Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


// router.get('/insert', async (req:any, res:any) => {
//     const status = await prisma.status.create({
//         data: {
//             name: "rejected",
//         },
//     }
//     );
//     res.json(status);
// });

router.get('/getAll', async (req:any, res:any) => {
    const statuses = await prisma.status.findMany();
    res.json(statuses);
});

router.get('/get/:id', async (req:any, res:any) => {
    const status = await prisma.status.findUnique({
        where: {
            id: Number(req.params.id),
        },
    });
    res.json(status);
});

router.post('/create/', async (req:any, res:any) => {
    const status = await prisma.status.create({
        data: {
            name: req.body.name,
        },
    });
    res.json(status);
});

router.put('/update/:id', async (req:any, res:any) => {
    const status = await prisma.status.update({
        where: {
            id: Number(req.params.id),
        },
        data: {
            name: req.body.name,
        },
    });
    res.json(status);
});

router.delete('/delete/:id', async (req:any, res:any) => {
    const status = await prisma.status.delete({
        where: {
            id: Number(req.params.id),
        },
    });
    res.json(status);
});

export default router;