import { stringify } from "qs";
import request from "@/utils/request";

export async function getCategoryByUid() {
  return request("/json/getCategoryByUid.json");
}
