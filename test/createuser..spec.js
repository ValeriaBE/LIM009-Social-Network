import MockFirebase from 'mock-cloud-firestore';

beforeEach(() => {
    const fixtureData = {
        __collection__:{
            users:{
                __doc__:{
                    abc1d:{
                        name: 'Lola',
                    }
                }
            }
        }
    }
    global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
})

const userFakeGoogle = (firebase) => firebase.auth('cred').set({
    uid: "q3ntMzjxsIhUy",
    displayName: "Valeria Berrocal"
})

import {
    createUser
} from "../src/controller/controller-firebase.js";

describe('createUser', ()=>{
    it('deberia guardar valor de la propiedad displayName en name', (done)=>{
        createUser({userFakeGoogle})
        .then((user)=>{
            expect(user.name).toEqual('Valeria Berrocal');
            done();
        })
    })
})