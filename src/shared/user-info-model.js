export class UserInfoModel {
    id;
    avatar;
    name;
    login;
    location;
    createdDate;
    publicRepos;
    followers

    constructor (user) {
      this.id = user.id
      this.avatar = user.avatar_url
      this.name = user.name
      this.login = user.login
      this.location = user?.location || ''
      this.createdDate = new Date(user.created_at).toLocaleString('uk-UA')
      this.publicRepos = user.public_repos
      this.followers = user.followers
    }
}
