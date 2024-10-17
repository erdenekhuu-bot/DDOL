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
    <section id="solution" className="h-[800px]">
      <p className="text-2xl py-8 text-center">Бидний шийдэл</p>
      <div className="flex px-10 flex-wrap justify-center">{solutionCards}</div>
    </section>
  );
};
