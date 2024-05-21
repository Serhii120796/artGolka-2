import { Aside, Text, ListItem, Button } from './SideBar.styled';

export const Sidebar = ({ abc }) => {
  const categories = {
    tn: {
      name: 'Термонаклейки',
      list: {
        tnA5: 'А5',
        tnA4: 'А4',
        tnA3: 'А3',
        tnA2: 'А2',
        tnP2060: 'Панно',
      },
    },
    rps: { name: 'Рушники великодні' },
    rss: { name: 'Рушники спасівські' },
    bow: { name: 'Банти' },
    rvm: { name: 'Рушники обрядові (малі)' },
  };

  return (
    <Aside>
      <Text>Каталог товарів</Text>
      <ul>
        {Object.keys(categories).map(type => (
          <ListItem key={type}>
            <Button type="button" onClick={() => abc(type)}>
              {categories[type].name}
            </Button>
            {categories[type].list && (
              <ul>
                {Object.keys(categories[type].list).map(subType => (
                  <ListItem key={subType}>
                    <Button type="button" onClick={() => abc(subType)}>
                      {categories[type].list[subType]}
                    </Button>
                  </ListItem>
                ))}
              </ul>
            )}
          </ListItem>
        ))}
      </ul>
    </Aside>
  );
};
