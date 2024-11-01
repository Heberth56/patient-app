import createAxios from "./axiosConfig";
export const addPatientApi = async (payload) => {
  try {
    const res = await createAxios.post("/clientes/add", payload);
    const body = await res.data;

    if (res.status === 200) {
      return {
        futuresyo: {
          success: true,
          code: body.code,
          message: body.message,
          status: body.status,
          data: body.data,
        },
      };
    } else {
      return {
        futuresyo: {
          success: false,
          code: body.code,
          message: body.message,
          status: body.status,
          data: null,
        },
      };
    }
  } catch (err) {
    if (err.response) {
      return {
        futuresyo: {
          success: false,
          code: err.response.data.code,
          message: err.response.data.message,
          status: err.response.data.status,
          data: null,
        },
      };
    } else {
      return {
        futuresyo: {
          success: false,
          code: 500,
          message: err.message || "Opps! Algo salió mal, intente más tarde.",
          status: "error",
          data: null,
        },
      };
    }
  }
};

export const editPatientApi = async (payload) => {
  try {
    const res = await createAxios.put(`/clientes/edit/${payload._id}`, payload);
    const body = await res.data;

    if (res.status === 200) {
      return {
        futuresyo: {
          success: true,
          code: body.code,
          message: body.message,
          status: body.status,
          data: body.data,
        },
      };
    } else {
      return {
        futuresyo: {
          success: false,
          code: body.code,
          message: body.message,
          status: body.status,
          data: null,
        },
      };
    }
  } catch (err) {
    if (err.response) {
      return {
        futuresyo: {
          success: false,
          code: err.response.data.code,
          message: err.response.data.message,
          status: err.response.data.status,
          data: null,
        },
      };
    } else {
      return {
        futuresyo: {
          success: false,
          code: 500,
          message: err.message || "Opps! Algo salió mal, intente más tarde.",
          status: "error",
          data: null,
        },
      };
    }
  }
};

export const listPatientApi = async () => {
  try {
    const res = await createAxios.get("/clientes/list");
    const body = await res.data;

    if (res.status === 200) {
      return {
        chiri: {
          success: true,
          code: body.code,
          message: body.message,
          status: body.status,
          data: body.data,
        },
      };
    } else {
      return {
        chiri: {
          success: false,
          code: body.code,
          message: body.message,
          status: body.status,
          data: null,
        },
      };
    }
  } catch (err) {
    if (err.response) {
      return {
        chiri: {
          success: false,
          code: err.response.status,
          message: err.response.statusText || "Ocurrio un problema...",
          status: err.response.status,
          data: null,
        },
      };
    } else {
      return {
        chiri: {
          success: false,
          code: 500,
          message: err.message || "Opps! Algo salió mal, intente más tarde.",
          status: "error",
          data: null,
        },
      };
    }
  }
};

export const getPatientApi = async (patientId) => {
  try {
    const res = await createAxios.get(`/clientes/get-patient/${patientId}`);
    const body = await res.data;

    if (res.status === 200) {
      return {
        chiri: {
          success: true,
          code: body.code,
          message: body.message,
          status: body.status,
          data: body.data,
        },
      };
    } else {
      return {
        chiri: {
          success: false,
          code: body.code,
          message: body.message,
          status: body.status,
          data: null,
        },
      };
    }
  } catch (err) {
    if (err.response) {
      return {
        chiri: {
          success: false,
          code: err.response.status,
          message: err.response.statusText || "Ocurrio un problema...",
          status: err.response.status,
          data: null,
        },
      };
    } else {
      return {
        chiri: {
          success: false,
          code: 500,
          message: err.message || "Opps! Algo salió mal, intente más tarde.",
          status: "error",
          data: null,
        },
      };
    }
  }
};

export const removePatientApi = async (patientId) => {
  try {
    const res = await createAxios.delete(`/clientes/remove/${patientId}`);
    const body = await res.data;

    if (res.status === 200) {
      return {
        chiri: {
          success: true,
          code: body.code,
          message: body.message,
          status: body.status,
          data: body.data,
        },
      };
    } else {
      return {
        chiri: {
          success: false,
          code: body.code,
          message: body.message,
          status: body.status,
          data: null,
        },
      };
    }
  } catch (err) {
    if (err.response) {
      return {
        chiri: {
          success: false,
          code: err.response.status,
          message: err.response.statusText || "Ocurrio un problema...",
          status: err.response.status,
          data: null,
        },
      };
    } else {
      return {
        chiri: {
          success: false,
          code: 500,
          message: err.message || "Opps! Algo salió mal, intente más tarde.",
          status: "error",
          data: null,
        },
      };
    }
  }
};
