#data is expected to be of the following form:
#each user's answers are a column vector in the general matrix data
#the first row is every user's answer to the first question...
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/kmeans.py', methods=['post'])
def kmeans(event_id):

    import numpy as np
    import pandas as pd
    import hashlib
    import csv
    from sklearn.cluster import KMeans

    #clustesr of 2 and 3
    clusters = int(len(data[0]) / 3)

    #get the list of users and their data

    #Psuedo
    #event = get_event(event_id)
    #users[] = event.getUsers()
    #matrix = survey of every user



    weight =[0,.5,1,-1,-1,-1,-1,1,1,-1,-1,1,.5,1,1,1,1,.5,1,1,1,1,1,1,1,1,1,-.5,-.5,-.5,-.5]
    weight = np.asarray([weight])

    kmeans = KMeans(clusters)
    kmeans.fit(matrix, weight)
    return "Hello World!"



if __name__ == '__main__':
    app.run(debug=True)
