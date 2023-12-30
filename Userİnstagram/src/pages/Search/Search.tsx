import React, { useEffect, useState } from "react";
import "./Search.scss";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface SearchProps {
  postQuery: string;
  latest: boolean;
  setSearchParams: React.Dispatch<React.SetStateAction<{}>>;
}

const Search = ({ postQuery, latest, setSearchParams }: SearchProps) => {
  const [search, setSearch] = useState<string>(postQuery);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const normalizeQuery = (query: string): string => {
    return query
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .toLowerCase()
      .trim();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const query = form.search.value;
    const normalizedQuery = normalizeQuery(query);
    const params: { [key: string]: string } = {};

    if (normalizedQuery.length) {
      params.post = normalizedQuery;
    }

    setSearchParams(params);
    navigate(`/Shop/?post=${normalizedQuery}`);
  };

  return (
    <div>
      <div className="advanced-search">
        <form onSubmit={handleSubmit}>
          <div className="group">
            <input
              type="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="What do you need?"
            />
            <button type="submit" value="Search">
              <div>
                <BsSearch />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
