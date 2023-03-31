export class PostDTO {
  id: number
  number: number
  url: string
  title: string
  author: GithubProfileData
  comments: number
  createdAt: string
  updatedAt: string
  body: string

  constructor(data: GithubIssueData) {
    this.id = data.id
    this.number = data.number
    this.url = data.html_url
    this.title = data.title
    this.author = data.user
    this.comments = data.comments
    this.createdAt = data.created_at
    this.updatedAt = data.updated_at
    this.body = data.body
  }
}
