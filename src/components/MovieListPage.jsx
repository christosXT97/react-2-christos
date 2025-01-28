import React from "react";
import movies from "../assets/movies.json";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { AppBar, Toolbar, Typography, Link} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
function MovieListPage() {
  return (
    <>
    <AppBar position="sticky">
        <Toolbar sx={{ gap: '1em' }}>
            <Typography component="h1" variant="h6">
            Dashboard
            </Typography>
            <Link component={RouterLink} color="inherit" to="/">Main page</Link>
            <Link component={RouterLink} color="inherit" to="/movielistpage">Movie table</Link>
        </Toolbar>
        </AppBar>
    <TableContainer component={Paper} style={{ margin: "20px auto", maxWidth: "800px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Genre</TableCell>
            <TableCell>Slogan</TableCell>
            <TableCell>Production Company</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Lead Character</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell>{movie.movie_title}</TableCell>
              <TableCell>{movie.movie_genre}</TableCell>
              <TableCell>{movie.movie_slogan}</TableCell>
              <TableCell>{movie.production_company}</TableCell>
              <TableCell>{movie.director}</TableCell>
              <TableCell>{movie.lead_character}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default MovieListPage;
