import { Aside, Text, ListItem, Button } from './SideBar.styled';

export const Sidebar = ({ abc }) => {
  const buttonTypes = ['rps', 'rss', 'bow', 'rvm'];

  const categories = {
    rps: 'Рушники великодні',
    rss: 'Рушники спасівські',
    bow: 'Банти',
    rvm: 'Рушники обрядові (малі)',
  };

  return (
    <Aside>
      <Text>Каталог товарів</Text>
      <ul>
        <ListItem>
          <Button type="button" onClick={() => abc('tn')}>
            Термонаклейки
          </Button>
          <ul>
            <ListItem>
              <Button type="button" onClick={() => abc('tnA5')}>
                А5
              </Button>
            </ListItem>
            <ListItem>
              <Button type="button" onClick={() => abc('tnA4')}>
                А4
              </Button>
            </ListItem>
            <ListItem>
              <Button type="button" onClick={() => abc('tnA3')}>
                А3
              </Button>
            </ListItem>
            <ListItem>
              <Button type="button" onClick={() => abc('tnA2')}>
                А2
              </Button>
            </ListItem>
            <ListItem>
              <Button type="button" onClick={() => abc('tnP2060')}>
                Панно
              </Button>
            </ListItem>
          </ul>
        </ListItem>
        {buttonTypes.map(type => (
          <ListItem>
            <Button type="button" onClick={() => abc(type)}>
              {categories[type]}
            </Button>
          </ListItem>
        ))}
      </ul>
    </Aside>
  );
};
