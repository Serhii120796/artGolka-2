import { Aside, Text, ListItem, Button } from "./SideBar.styled";

export const Sidebar = ({ abc }) => {
  return (
    <Aside>
      <Text>Каталог товарів</Text>
      <ul>
        <ListItem>
          <Button type="button" onClick={() => abc("tn")}>Термонаклейки</Button>
          <ul>
            <ListItem>
              <Button type="button" onClick={() => abc("tnA5")}>
                А5
              </Button>
            </ListItem>
            <ListItem>
              <Button type="button" onClick={() => abc("tnA4")}>
                А4
              </Button>
            </ListItem>
            <ListItem>
              <Button type="button" onClick={() => abc("tnA3")}>
                А3
              </Button>
            </ListItem>
            <ListItem>
              <Button type="button" onClick={() => abc("tnA2")}>
                А2
              </Button>
            </ListItem>
            <ListItem>
              <Button type="button" onClick={() => abc("tnP2060")}>
                Панно
              </Button>
            </ListItem>
          </ul>
        </ListItem>
        <ListItem>
          <Button type="button" onClick={() => abc("rps")}>Рушники великодні</Button>
        </ListItem>
        <ListItem>
          <Button type="button" onClick={() => abc("rss")}>Рушники спасівські</Button>
        </ListItem>
        <ListItem>
          <Button type="button" onClick={() => abc("bow")}>Банти</Button>
        </ListItem>
        <ListItem>
          <Button type="button" onClick={() => abc("rvm")}>Рушники обрядові (малі)</Button>
        </ListItem>
      </ul>
    </Aside>
  );
};
