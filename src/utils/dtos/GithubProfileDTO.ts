export class GithubProfileDTO {
  id: number
  avatar: string
  name: string
  login: string
  github: string
  bio: string
  company: string
  followers: number

  constructor(data: GithubProfileData) {
    this.id = data.id
    this.avatar = data.avatar_url
    this.name = data.name
    this.login = data.login
    this.github = data.html_url
    this.bio = data.bio
    this.company = data.company
    this.followers = data.followers
  }
}
