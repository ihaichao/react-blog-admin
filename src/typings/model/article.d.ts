interface IArticle {
  id: string,
  title: string
  tag?: string
  content: string
  createTime: string
  updateTime?: string
  pageView: number
}