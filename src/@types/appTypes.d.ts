type GithubProfileData = {
  id: number
  avatar_url: string
  name: string
  login: string
  html_url: string
  bio: string
  company: string
  followers: number
}

type GithubIssueData = {
  id: number
  number: number
  html_url: string
  title: string
  user: GithubProfileData
  comments: number
  created_at: string
  updated_at: string
  body: string
}
