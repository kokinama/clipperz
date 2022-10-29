/*

Copyright 2008-2015 Clipperz Srl

This file is part of Clipperz, the online password manager.
For further information about its features and functionalities please
refer to http://www.clipperz.com.

* Clipperz is free software: you can redistribute it and/or modify it
  under the terms of the GNU Affero General Public License as published
  by the Free Software Foundation, either version 3 of the License, or 
  (at your option) any later version.

* Clipperz is distributed in the hope that it will be useful, but 
  WITHOUT ANY WARRANTY; without even the implied warranty of 
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  See the GNU Affero General Public License for more details.

* You should have received a copy of the GNU Affero General Public
  License along with Clipperz. If not, see http://www.gnu.org/licenses/.

*/

//
//	close.js
//	close
//
//	Created by Giulio Cesare Solaroli on 3/14/10
//	Copyright 2010 Clipperz
//	This code was generated by Opacity. You may use or modify it in any way.
//

var kClipperz_PM_UI_Canvas_Tips_closeWidth = 310.0;
var kClipperz_PM_UI_Canvas_Tips_closeHeight = 6.0;

function Clipperz_PM_UI_Canvas_Tips_close(canvas, aColor, aBackgroundColor)
{
	var context = canvas.getContext("2d");
	var alignStroke;
	var resolution;
	var path;
	var pointX;
	var pointY;
	if (window.devicePixelRatio)
		resolution = window.devicePixelRatio;
	else
		resolution = 1.0;
	resolution *= 0.5 * (canvas.width / kClipperz_PM_UI_Canvas_Tips_closeWidth + canvas.height / kClipperz_PM_UI_Canvas_Tips_closeHeight);
	
	context.save();
	context.scale(canvas.width / kClipperz_PM_UI_Canvas_Tips_closeWidth, canvas.height / kClipperz_PM_UI_Canvas_Tips_closeHeight);
	context.clearRect(0.0, 0.0, kClipperz_PM_UI_Canvas_Tips_closeWidth, kClipperz_PM_UI_Canvas_Tips_closeHeight);
	
	// background
	
	alignStroke = 0.0;
	context.beginPath();
	pointX = 310.0;
	pointY = 6.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.moveTo(pointX, pointY);
	pointX = 310.0;
	pointY = 0.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 0.0;
	pointY = 0.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 0.0;
	pointY = 6.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 310.0;
	pointY = 6.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	context.closePath();
	context.fillStyle = aBackgroundColor;
	context.fill();
	
	// grid
	
	// background
	
	alignStroke = 0.0;
	context.beginPath();
	pointX = 310.0;
	pointY = 6.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.moveTo(pointX, pointY);
	pointX = 310.0;
	pointY = 0.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 0.0;
	pointY = 0.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 0.0;
	pointY = 6.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 310.0;
	pointY = 6.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	context.closePath();
	context.fillStyle = aBackgroundColor;
	context.fill();
	
	// toggle
	
	alignStroke = 0.0;
	context.beginPath();
	pointX = 149.0;
	pointY = 6.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.moveTo(pointX, pointY);
	pointX = 161.0;
	pointY = 6.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 155.0;
	pointY = 0.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 149.0;
	pointY = 6.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	context.closePath();
	context.fillStyle = aColor;
	context.fill();
	
	context.restore();
}
