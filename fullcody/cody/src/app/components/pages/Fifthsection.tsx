"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CardActions from "@mui/material/CardActions";
import { feature } from "@/app/types/type";
import { Button } from "@mui/material";

export const Fifthsection = function () {
  const [getFeature, setFeature] = useState<feature>([]);
  return (
    <section id="features" className="h-[600px]">
      <p className="text-2xl py-8 text-center">Системийн боломжууд</p>
      <div>
        <Card variant="outlined" sx={{ width: 200, height: 250, margin: 2 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                H
              </Avatar>
            }
          />
          <CardContent>
            <Typography variant="h5" component="div" className="font-bold">
              Контент менежмент систем
            </Typography>
          </CardContent>
          <CardActions className="flex justify-end px-8">
            <span>CMS</span>
          </CardActions>
        </Card>
      </div>
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
