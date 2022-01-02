import json
import argparse
from os import name

# Parse Args
parser = argparse.ArgumentParser(description='Manage Videos.')
group = parser.add_argument('-l', '--list', action='store_true', help='List current videos')
group = parser.add_argument('-a', '--add', action='store_true', help='Add new video')
args = parser.parse_args()


# Load current videos json
videos = json.load(open('videos.json', 'r'))

def listVideos():
  for video in videos:
    print(video)


def addVideo():
  video = {}
  video['title'] = input("Title: ")
  video['code'] = input("YouTube Code: ")
  video['lat'] = float(input("Latitude: "))
  video['lng'] = float(input("Longitude: "))
  
  videos[video['name']] = video

  with open('videos.json', 'w') as dataFile:
    json.dump(videos, dataFile, indent=4)
  

if __name__== '__main__':
  if args.list:
    listVideos()
  elif args.add:
    addVideo()