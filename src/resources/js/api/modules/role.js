import resource from "../resource";
import auth from "./auth";
import endpoint from "../endpoint";
import QueryString from "../query-string";

export default {
  browse(data) {
    return auth.refreshToken().then((res) => {
      let ep = endpoint.role.browse;
      let qs = QueryString(data);
      let url = ep + qs;
      return resource.get(url);
    });
  },

  read(data) {
    return auth.refreshToken().then((res) => {
      let ep = endpoint.role.read;
      let qs = QueryString(data);
      let url = ep + qs;
      return resource.get(url);
    });
  },

  edit(data) {
    return auth.refreshToken().then((res) => {
      return resource.put(endpoint.role.edit, data);
    });
  },

  add(data) {
    return auth.refreshToken().then((res) => {
      return resource.post(endpoint.role.add, data);
    });
  },

  delete(data) {
    return auth.refreshToken().then((res) => {
      return resource.delete(endpoint.role.delete, data);
    });
  },

  setPermission(data) {
    return auth.refreshToken().then((res) => {
        let paramData = {
            data: data
        }
      return resource.post(endpoint.role.setPermission, paramData);
    });
  },
};