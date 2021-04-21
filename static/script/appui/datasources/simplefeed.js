/**
* @preserve Copyright (c) 2013 British Broadcasting Corporation
* (http://www.bbc.co.uk) and TAL Contributors (1)
*
* (1) TAL Contributors are listed in the AUTHORS file and at
*     https://github.com/fmtvp/TAL/AUTHORS - please extend this file,
*     not this notice.
*
* @license Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
* All rights reserved
* Please contact us for an alternative licence
*/

define(
  "sampleapp/appui/datasources/simplefeed",
  [
    "antie/class"
  ],
  function(Class) {
    return Class.extend({
      // You will probably want to do something more useful then returning static data
      loadData : function(callbacks) {
        callbacks.onSuccess(
          [
            {
              "id":"1",
              "title":"13_hours",
              "img" : "static/img/poster/13_hours.jpg"
            },
            {
              "id":"2",
              "title":"Airplane",
              "img" : "static/img/poster/airplane.jpg"
            },
            {
              "id":"3",
              "title":"Birds Of Pray",
              "img" : "static/img/poster/BOP.jpg"
            },
            {
              "id":"4",
              "title":"Dunkirk",
              "img" : "static/img/poster/dunkirk.jpg"
            },
            {
              "id":"5",
              "title":"Hobbs & Shaw",
              "img" : "static/img/poster/hobbs&shaw.jpg"
            },
            {
              "id":"6",
              "title":"I Care A Lot",
              "img" : "static/img/poster/ical.jfif"
            },
            {
              "id":"7",
              "title":"Joker",
              "img" : "static/img/poster/joker.jpg"
            },
            {
              "id":"8",
              "title":"Monster Hunter",
              "img" : "static/img/poster/monster_hunter.jpg"
            },
            {
              "id":"9",
              "title":"Tom Jerry",
              "img" : "static/img/poster/Tom_Jerry.jpg"
            },
            {
              "id":"10",
              "title":"Witches",
              "img" : "static/img/poster/witches.jpg"
            },
            {
              "id":"11",
              "title":"Wrong Turn",
              "img" : "static/img/poster/wrong_turn.jpg"
            },
            {
              "id":"12",
              "title":"W W - 84",
              "img" : "static/img/poster/ww84.jpg"
            },
            {
              "id":"13",
              "title":"Zombieland",
              "img" : "static/img/poster/zombieland.jpg"
            },
          ]
        );
      }
    });
  });
