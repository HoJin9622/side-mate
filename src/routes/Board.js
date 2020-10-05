import React, { useEffect, useState } from "react";
import api from "../settings/api";
import Post from "../components/Home/MainBoard/Post";
import {
  Container,
  Content,
  GridContainer,
} from "../components/Home/MainBoard/MainBoard";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
  },
}));

function Board(props) {
  const classes = useStyles();
  const [pageNumber, setPageNumber] = useState(2);
  let params = { page: pageNumber };
  const [posts, setPosts] = useState([]);
  const [maxpage, setMaxpage] = useState(1); //Pagnation 길이
  useEffect(() => {
    api
      .get("/posts/?", { params })
      .then((res) => {
        setPosts(res.data.results);
        setMaxpage(res.data.count);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNumber]);

  return (
    <Container>
      <Content>
        <GridContainer>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </GridContainer>
        <Pagination
          className={classes.root}
          count={maxpage % 20 !== 0 ? maxpage / 20 + 1 : maxpage / 20}
          defaultPage={1}
          page={parseInt(pageNumber)}
          boundaryCount={2}
          onChange={(e, value) => {
            setPageNumber(value);
          }}
        />
      </Content>
    </Container>
  );
}

export default Board;
