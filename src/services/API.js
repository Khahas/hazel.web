import axios from "axios";

const API_URL = "https://localhost:7053/api";
const endpoints = Object.freeze({
  employees: `${API_URL}/employees`,

  employee(id) {
    return `${this.employees}/${id}`;
  },
  get createEmployee() {
    return `${this.employees}`;
  },
  deleteEmployee(id) {
    return `${this.employee(id)}`;
  },
  updateEmployee(id) {
    return `${this.employee(id)}`;
  },
});
const endpointsS = Object.freeze({
  shifts: `${API_URL}/shifts`,

  shift(id) {
    return `${this.shifts}/${id}`;
  },
  get createShift() {
    return `${this.shifts}`;
  },
  deleteShift(id) {
    return `${this.shift(id)}`;
  },
  updateShift(id) {
    return `${this.shift(id)}`;
  },
});

const endpoint = Object.freeze({
  employeeShifts: `${API_URL}/employeeShifts`,

  employeeShift(id) {
    return `${this.employeeShifts}/${id}`;
  },
  get createEmployeeShift() {
    return `${this.employeeShifts}`;
  },
  deleteEmployeeShift(id) {
    return `${this.employeeShift(id)}`;
  },
  updateEmployeeShift(id) {
    return `${this.employeeShift(id)}`;
  },
});

export async function deleteEmployee(id) {
  const response = await axios.delete(endpoints.deleteEmployee(id));
  return response.data;
}

export async function createEmployee(data) {
  const response = await axios.post(endpoints.createEmployee, {
    phoneNumber: "",
    email: "",
    dateOfBirth: new Date().toJSON(),

    ...data,
  });
  return response.data;
}

export async function updateEmployee({ id, ...data }) {
  console.log(id);
  const response = await axios.put(endpoints.updateEmployee(id), {
    phoneNumber: "",
    email: "",
    dateOfBirth: new Date().toJSON(),
    ...data,
  });
  return response.data;
}

export async function getEmployee(id) {
  const response = await axios.get(endpoints.employee(id));
  return response.data;
}

export async function getEmployees() {
  const response = await axios.get(endpoints.employees);
  return response.data;
}

export async function deleteShift(id) {
  const response = await axios.delete(endpointsS.deleteShift(id));
  return response.data;
}

export async function createShift(data) {
  const response = await axios.post(endpointsS.createShift, {
    startDate: new Date().toJSON(),
    endDate: new Date().toJSON(),
    description: data.description,
    ...data,
  });
  return response.data;
}

export async function updateShift({ id, ...data }) {
  const response = await axios.put(endpointsS.updateShift(id), {
    startDate: new Date().toJSON(),
    endDate: new Date().toJSON(),
    description: data.description,
    ...data,
  });
  return response.data;
}

export async function getShift(id) {
  const response = await axios.get(endpointsS.shift(id));
  return response.data;
}

export async function getShifts() {
  const response = await axios.get(endpointsS.shifts);
  return response.data;
}

export async function deleteEmployeeShift(id) {
  const response = await axios.delete(endpoint.deleteEmployeeShift(id));
  return response.data;
}

export async function createEmployeeShift(data) {
  const response = await axios.post(endpoint.createEmployeeShift, {
    startDate: new Date().toJSON(),
    endDate: new Date().toJSON(),
    description: data.description,
    ...data,
  });
  return response.data;
}

export async function updateEmployeeShift({ id, ...data }) {
  const response = await axios.put(endpoint.updateEmployeeShift(id), {
    startDate: new Date().toJSON(),
    endDate: new Date().toJSON(),
    description: data.description,
    ...data,
  });
  return response.data;
}

export async function getEmployeeShift(id) {
  const response = await axios.get(endpoint.employeeShift(id));
  return response.data;
}

export async function getEmployeeShifts() {
  const response = await axios.get(endpoint.employeeShifts);
  return response.data;
}
