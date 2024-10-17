"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { solution } from "@/app/types/type";
import { Sol } from "../PopUp";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { header } from "@/app/page";
import { Button } from "@mui/material";

export const Fourthsection = function () {
  const [getSolution, setSolution] = useState<solution>([]);
  const fetching = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/solutions",
        header
      );
      setSolution(response.data.data);
    } catch (error) {
      return;
    }
  };
  useEffect(function () {
    fetching();
  }, []);

  const solutionCards = [];
  for (let i = 0; i < getSolution.length; i++) {
    if (i < 4) {
      solutionCards.push(
        <Card key={i} variant="outlined" sx={{ maxWidth: 380, margin: 2 }}>
          <CardHeader title={getSolution[i].title} />
          <CardContent>
            <Typography variant="body2">{getSolution[i].content}</Typography>
          </CardContent>
        </Card>
      );
    }
  }
  return (
    <section id="solution" className="">
      <p className="text-2xl py-8 text-center">Бидний шийдэл</p>
      <div className="flex px-10 flex-wrap justify-center">{solutionCards}</div>
      <div className="flex my-12 justify-center">
        <Button
          variant="contained"
          className="px-8 py-4 bg-purple-900 text-xs font-bold rounded-lg"
          style={{
            background:
              "linear-gradient(95.41deg, rgb(131, 38, 226) 34.67%, rgb(82, 6, 225) 148.46%)",
          }}
        >
          Дэлгэрэнгүй
        </Button>
      </div>
    </section>
  );
};
