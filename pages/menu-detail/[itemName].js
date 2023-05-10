import { getMenu } from '../../lib/api';
import MenuDetail from "../../components/MenuSection/MenuDetail/MenuDetail";
import Layout from '../../components/Layout/Layout';

export async function getServerSideProps({ params }) {
  const menuData = await getMenu();
  const item = menuData
    .flatMap((category) => category.items)
    .find((item) => item.name === params.itemName);

  if (!item) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      item,
    },
  };
}

const MenuDetailPage = ({ item }) => {
  return (
    <Layout>
      <MenuDetail item={item} />
    </Layout>
  );
};

export default MenuDetailPage;
