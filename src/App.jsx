import Header from "./components/Header";
import HeroMenu from "./components/HeroMenu";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./index.css";
import "tw-elements";
import MovieSlider from "./components/MovieSlider";

const categories = [
  { search: "Rambo", title: "Action category" },
  { search: "Disney", title: "Movies for all" },
  { search: "Back to", title: "Science fiction" },
];

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Header />
        <HeroMenu />
        {categories.map(({ search, title }) => (
          <MovieSlider key={title} search={search} title={title} />
        ))}
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
