import React, { useEffect } from 'react';
import './ImageComparisionSlider.css';
import traditionalClassroom from '../assets/images/traditional_classroom.jpg';
import smartClassroom from '../assets/images/smart_classroom.jpg';
import $ from 'jquery';

const ImageComparisonSlider = () => {

    useEffect(() => {
        // jQuery code to handle the drag functionality
        function drags(dragElement, resizeElement, container) {
            dragElement.on("mousedown vmousedown", function (e) {
                dragElement.addClass('draggable');
                resizeElement.addClass('resizable');

                let dragWidth = dragElement.outerWidth(),
                    xPosition = dragElement.offset().left + dragWidth - e.pageX,
                    containerOffset = container.offset().left,
                    containerWidth = container.outerWidth(),
                    minLeft = containerOffset + 10,
                    maxLeft = containerOffset + containerWidth - dragWidth - 10;

                dragElement.parents().on("mousemove vmousemove", function (e) {
                    let leftValue = e.pageX + xPosition - dragWidth;

                    if (leftValue < minLeft) {
                        leftValue = minLeft;
                    } else if (leftValue > maxLeft) {
                        leftValue = maxLeft;
                    }

                    let widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

                    $('.draggable').css('left', widthValue).on("mouseup vmouseup", function () {
                        $(this).removeClass('draggable');
                        resizeElement.removeClass('resizable');
                    });

                    $('.resizable').css('width', widthValue);
                }).on("mouseup vmouseup", function (e) {
                    dragElement.removeClass('draggable');
                    resizeElement.removeClass('resizable');
                });

                e.preventDefault();
            }).on("mouseup vmouseup", function (e) {
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
        }

        // Initialize the slider functionality
        $('.cd-image-container').each(function () {
            let actual = $(this);
            drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual);
        });
    }, []); // Empty dependency array to run once on mount

    return (
        <figure className="cd-image-container">
            <img src={smartClassroom} alt="Smart Classroom" />
            <span className="cd-image-label cd-right" data-type="original">Smart Classroom</span>

            <div className="cd-resize-img">
                <img src={traditionalClassroom} alt="Traditional Classroom" />
                <span className="cd-image-label cd-left" data-type="modified">Traditional Classroom</span>
            </div>

            <span className="cd-handle"></span>
        </figure>
    );
};

export default ImageComparisonSlider;
