export class UserModel {
    id;
    image;
    login;

    constructor (user) {
      this.id = user.id
      this.image = user.avatar_url
      this.login = user.login
    }
}
