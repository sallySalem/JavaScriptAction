{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf600
{\fonttbl\f0\fnil\fcharset0 Menlo-Bold;\f1\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red133\green0\blue2;\red244\green246\blue249;\red38\green38\blue38;
\red27\green31\blue34;}
{\*\expandedcolortbl;;\cssrgb\c60000\c0\c0;\cssrgb\c96471\c97255\c98039;\cssrgb\c20000\c20000\c20000;
\cssrgb\c14118\c16078\c18039;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl380\partightenfactor0

\f0\b\fs27\fsmilli13600 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 # Hello world javascript action
\f1\b0 \cf4 \strokec4 \
\
This action prints "Hello World" or "Hello" + the name of a person to greet to the log.\
\

\f0\b \cf2 \strokec2 ## Inputs
\f1\b0 \cf4 \strokec4 \
\

\f0\b \cf2 \strokec2 ### `who-to-greet`
\f1\b0 \cf4 \strokec4 \
\

\f0\b **Required**
\f1\b0  The name of the person to greet. Default `"World"`.\
\

\f0\b \cf2 \strokec2 ## Outputs
\f1\b0 \cf4 \strokec4 \
\

\f0\b \cf2 \strokec2 ### `time`
\f1\b0 \cf4 \strokec4 \
\
The time we greeted you.\
\

\f0\b \cf2 \strokec2 ## Example usage
\f1\b0 \cf4 \strokec4 \
\
uses: actions/JavaScriptAction@v1\
with:\
  who-to-greet: 'Mona the Octocat'\cf5 \strokec5 \
}