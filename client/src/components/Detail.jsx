import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDetail, GET_DETAIL } from "../redux/actions";
import { Link, useParams } from "react-router-dom";
import "../components/Styles/details.css";
import loading from "./Styles/imagenes/loading.gif";

export default function PokemonDetail() {
  const dispatch = useDispatch();
  const IdPok = useParams();
  const detailPok = useSelector((state) => state.detail);
  console.log(detailPok);
  useEffect(() => {
    dispatch(GetDetail(IdPok.id));
    return () => {
      dispatch({ type: GET_DETAIL, payload: {} });
    };
  }, [dispatch]);

  return (
    <div className="background2">
      <div>
        <div className="details">
          {detailPok.length > 0 ? (
            <div>
              <div className=" face backs">
                <h3>Id: {detailPok[0].id}</h3>
                <h3>Name: {detailPok[0].name}</h3>
                <h3>Hp: {detailPok[0].hp}</h3>
                <h3>Attack: {detailPok[0].attack}</h3>
                <h3>Defense: {detailPok[0].defense}</h3>
                <h3>Speed: {detailPok[0].speed}</h3>
                <h3>Height: {detailPok[0].height}</h3>
                <h3>Weight: {detailPok[0].weight}</h3>

                <h3>
                  {" "}
                  Types:
                  {detailPok[0].types[0].name ? (
                    <ul>
                      <li> {" " + detailPok[0].types[0].name} </li>
                    </ul>
                  ) : (
                    <ul>
                      <li> {" " + detailPok[0].types}</li>
                    </ul>
                  )}
                </h3>
              </div>
              <div className="face fronts">
                <img
                  src={detailPok[0].imagen}
                  alt="img no fount"
                  height="350px"
                  width="345px"
                />
              </div>
            </div>
          ) : (
            <div>
              <img
                src={loading}
                alt="pokemon not fount"
                height="200px"
                width="500px"
              />
            </div>
          )}
        </div>
        <div>
          <Link to="/home">
            <button className="aHome">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
