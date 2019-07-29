'use strict';

const profilepic_min_dimension = 80;
const profilepic_max_dimension = 250;

const about_me = ['Hi! I am', 'Kalyanasundharam Kathiresan&nbsp;&lt;kalvinci<i>&sol;</i>&gt;', 'A Computer Science engineer, a programmer, and a maverick.', 'I believe hard-work beats talent.', 'I also believe that people who are modest are cool.', 'I like Spider-man. (since 2004)', 'I\'m a huge fan of Tom Cruise.', 'Even numbers rock. (please pay attention)', 'Most importantly, I love simplicity.', 'Blaah.. blaaah... blaaaaaah......', 'Now scroll to play my movie!'];

var header = document.querySelector('header');

var page_0 = document.querySelector('.page-0');

var profilePic = document.querySelector('#profile-pic');

var header_profilePic = document.querySelector('#header-profile-pic');

var page_0_rect = page_0.getBoundingClientRect();

var initial_rotation_count = 0;

var type_out_node_list = document.getElementsByClassName('type-out-text');

window.onload = function() {
    var inital_load_disk_rotation = setInterval(function() {
        profilePic.style['transform'] = 'rotate('+initial_rotation_count+'deg)';
        initial_rotation_count += 45;
        if (initial_rotation_count >= 1845) {
            clearInterval(inital_load_disk_rotation);
        }
    }, 100);
    
    var i=0, y=0, k=0;
    
    var type_out_sentence = setInterval(function() {
        type_out_node_list[i].innerHTML = about_me[i];
        i++;
        if (i == about_me.length-2) {
            clearInterval(type_out_sentence);
            var type_out_char = setInterval(function() {
                type_out_node_list[i].innerHTML += about_me[i][y];
                y++;
                if (y == about_me[i].length) {
                    i++;
                    y=0;
                }
                if (i == about_me.length) {
                    clearInterval(type_out_char);
                }
            }, 50);
        }
    }, 400);
}

var rotation_count = 0;

window.addEventListener('scroll', function() {
    if (page_0_rect.top >= 0) {
        rotation_count = 0;
    } else if (page_0_rect.top <= page_0.getBoundingClientRect().top) {
        rotation_count -= 5;
    } else {
        rotation_count += 5;
    }
    page_0_rect = page_0.getBoundingClientRect();
    profilePic.style['transform'] = 'rotate('+rotation_count+'deg)';
    header_profilePic.style['transform'] = 'rotate('+rotation_count+'deg)';
    if (page_0_rect.bottom <= -50) {
        header.style.display = 'grid';
    } else {
        header.style.display = 'none';
    }
});