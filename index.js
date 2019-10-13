{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf600
{\fonttbl\f0\fnil\fcharset0 Menlo-Bold;\f1\fnil\fcharset0 Menlo-Regular;\f2\fnil\fcharset0 Menlo-Italic;
}
{\colortbl;\red255\green255\blue255;\red38\green38\blue38;\red244\green246\blue249;\red14\green114\blue164;
\red210\green0\blue53;\red135\green136\blue117;\red14\green110\blue109;\red27\green31\blue34;}
{\*\expandedcolortbl;;\cssrgb\c20000\c20000\c20000;\cssrgb\c96471\c97255\c98039;\cssrgb\c0\c52549\c70196;
\cssrgb\c86667\c6667\c26667;\cssrgb\c60000\c60000\c53333;\cssrgb\c0\c50196\c50196;\cssrgb\c14118\c16078\c18039;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl380\partightenfactor0

\f0\b\fs27\fsmilli13600 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 const
\f1\b0  core = \cf4 \strokec4 require\cf2 \strokec2 (\cf5 \strokec5 '@actions/core'\cf2 \strokec2 );\

\f0\b const
\f1\b0  github = \cf4 \strokec4 require\cf2 \strokec2 (\cf5 \strokec5 '@actions/github'\cf2 \strokec2 );\
\

\f0\b try
\f1\b0  \{\
  
\f2\i \cf6 \strokec6 // `who-to-greet` input defined in action metadata file
\f1\i0 \cf2 \strokec2 \
  
\f0\b const
\f1\b0  nameToGreet = core.getInput(\cf5 \strokec5 'who-to-greet'\cf2 \strokec2 );\
  \cf4 \strokec4 console\cf2 \strokec2 .log(\cf5 \strokec5 `Hello \cf2 \strokec2 $\{nameToGreet\}\cf5 \strokec5 !`\cf2 \strokec2 );\
  
\f0\b const
\f1\b0  time = (
\f0\b new
\f1\b0  \cf4 \strokec4 Date\cf2 \strokec2 ()).toTimeString();\
  core.setOutput(\cf5 \strokec5 "time"\cf2 \strokec2 , time);\
  
\f2\i \cf6 \strokec6 // Get the JSON webhook payload for the event that triggered the workflow
\f1\i0 \cf2 \strokec2 \
  
\f0\b const
\f1\b0  payload = \cf4 \strokec4 JSON\cf2 \strokec2 .stringify(github.context.payload, \cf7 \strokec7 undefined\cf2 \strokec2 , \cf7 \strokec7 2\cf2 \strokec2 )\
  \cf4 \strokec4 console\cf2 \strokec2 .log(\cf5 \strokec5 `The event payload: \cf2 \strokec2 $\{payload\}\cf5 \strokec5 `\cf2 \strokec2 );\
\} 
\f0\b catch
\f1\b0  (error) \{\
  core.setFailed(error.message);\
\}\cf8 \strokec8 \
}