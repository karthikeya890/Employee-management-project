const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllEmployees = async (req, res) => {
  const search = req.query.search;

  const response = await prisma.employee.findMany({
    where: {
      OR: [
        {
          name: { contains: search },
        },
        {
          role: { contains: search },
        },
        {
          gmail: { contains: search },
        },
      ],
    },
  });
  res.send(response);
};

const editEmployeeDetails = async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  await prisma.employee.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: data.name,
      gmail: data.gmail,
      role: data.role,
      phone_no: data.phoneNo,
      image_url: data.imageUrl,
    },
  });

  const response = await prisma.employee.findMany();

  res.send(response);
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  await prisma.employee.delete({
    where: {
      id: parseInt(id),
    },
  });

  const response = await prisma.employee.findMany();

  res.send(response);
};

const addEmployee = async (req, res) => {
  const { name, gmail, role, phoneNo, imageUrl } = req.body;

  await prisma.employee.create({
    data: {
      name,
      gmail,
      role,
      phone_no: phoneNo,
      image_url: imageUrl,
    },
  });

  const response = await prisma.employee.findMany();

  res.send(response);
};

module.exports = {
  getAllEmployees,
  editEmployeeDetails,
  deleteEmployee,
  addEmployee,
};
