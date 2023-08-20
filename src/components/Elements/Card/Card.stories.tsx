import {Meta, StoryObj} from "@storybook/react";
import {Button, Card, CardBody, CardFooter, CardHeader, Typography} from "@/components/Elements";

const meta = {
  title: 'Elements/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleCard: Story = {

  render: (args) => {
    return (
      <div className={'bg-slate-200 p-5'}>
        <Card className={'max-w-md'}>
          <CardHeader>
            <img alt={'サラダ'} src={'https://3.bp.blogspot.com/-8lpZHuv2KT8/V5NEcbV6EFI/AAAAAAAA8jE/AP6PjY_yGNQojTftM10ieg2zW6vv2Pp4wCLcB/s800/salad_reisyabu.png'} />
          </CardHeader>
          <CardBody>
            <Typography variant={'h4'} className={'my-2 text-center'}>This is Sarad</Typography>
            <Typography variant={'span'}>
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
              Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardBody>
          <CardFooter>
            <Button variant={'text'} onClick={()=> window.open('https://www.irasutoya.com/2016/07/blog-post_267.html')}>
              to site
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
}