import {v4} from 'uuid';
import axios from 'axios';
import {BASE_URL, LIBRARY_URL, USER_TYPES} from "./constants";

export class Library {
  constructor(name, address, books = [], users = []) {
    this.id = v4();
    this.name = name;
    this.address = address;
    this.books = books;
    this.users = users;
    this.url = LIBRARY_URL + `/${this.id}`;
    this.rentDays = {
      [USER_TYPES.usual]: 30,
      [USER_TYPES.premium]: 60,
      [USER_TYPES.sonOfLibrarian]: Infinity,
    }
  }

  async createLibrary() {
    const {id, name, address, books, users} = this;
    return await axios.post(LIBRARY_URL, {
      id,
      name,
      address,
      books,
      users,
    });
  }

  async getData() {
    const response = await axios.get(this.url);
    return response.data;
  }

  async addUser({username, login, password, type = USER_TYPES.usual, books = []}) {
    const user = {
      id: v4(),
      username,
      login,
      books,
      type,
    };
    const data = await this.getData();
    const users = [...data.users, user];
    return await axios.patch(this.url, { users });
  }

  async addBook(data) {

  }
}


