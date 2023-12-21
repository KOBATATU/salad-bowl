import { render, screen } from '@testing-library/react'
import { ArticleList } from './ArticleList'
import { items } from './fixture'
import { ArticleListItem, ItemProps } from '@/__test__/05/ArticleListItem'

test('タイトルの表示', () => {
  //given
  render(<ArticleList items={items} />)

  //then
  expect(screen.getByRole('heading', { name: '記事一覧' })).toBeInTheDocument()
})

test('記事の数', ()=>{
  //given
  render(<ArticleList items={items} />)

  //then
  expect(screen.getAllByTestId('article-item')).toHaveLength(3)
})

test('記事が表示されていない', ()=> {
  //given
  render(<ArticleList items={[]} />)

  //then
  expect(screen.queryByRole('article-item')).not.toBeInTheDocument()
  expect(screen.getByText('投稿記事がありません')).toBeInTheDocument()
})

const item: ItemProps = {
  id: 'typescript',
  title: 'hoge',
  body: 'test'
}
test('IDに紐づいたリンクが表示される', ()=>{
  //given
  render(<ArticleListItem {...item} />)
  
  //then
  expect(screen.getByRole('link', { name: 'もっと見る' })).toHaveAttribute(
    'href',
    '/articles/typescript'
  )
})