var express = require("express");
var etsyjs = require('etsy-js');
var client = etsyjs.client('4mwaqyth5mxruphx3krtb52c');
var session = require('express-session')

module.exports = function(app){
  app.get("/api/orders",function(req,res){
    var clientShop = client.shop("LittleCardCupboard");
    res.send(clientShop);
  });

  app.get("/api/orders/:order_id",function(req,res){

  });

  //application -------------------------

  app.get("*", function(req,res){
    res.sendfile("./public/index.html");
  })
};
