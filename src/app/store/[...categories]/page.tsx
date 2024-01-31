interface CategoryPageProps {
  params: {
    categories: string[];
  };
  searchParams?: string;
}

const CategoryPage = (props: CategoryPageProps) => {
  const { categories } = props.params;

  console.log(props.searchParams);

  return (
    <div>
      <h1>Estamos en la categoria: {categories}</h1>
    </div>
  );
};

export default CategoryPage;
