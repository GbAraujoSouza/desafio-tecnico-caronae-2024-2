import api from "../api";

export default {
  async getAllRides() {
    try {
      const response = api.get("");
      return response;
    } catch (error) {
      throw error;
    }
  }
}
