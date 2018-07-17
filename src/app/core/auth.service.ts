import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable, of} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {User} from './user.interface';





@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user = this.afAuth.authState.pipe(
        switchMap(user => {
        return user ?
          this.afs.doc<User>(`users/${user.uid}`).valueChanges() :
          of(null);
      })
    );
  }
  public googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.OAuthLogin(provider);
  }

  private async OAuthLogin(provider: firebase.auth.GoogleAuthProvider) {

    const {user} = await this.afAuth.auth.signInWithPopup(provider);
    this.updateUserData(user);
  }

  private updateUserData(user: firebase.User | null) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    userRef.set(data);
  }
}
