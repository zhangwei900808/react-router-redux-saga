import Request from "../utils/request";

class Apis {
  getCategory = () => Request.get("/users");
}

export default new Apis();
