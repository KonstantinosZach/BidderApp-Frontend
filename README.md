### Project - Web Application 2022

### Μέλη ομάδας:
Γεώργιος-Κωνσταντίνος Ζαχαρόπουλος

[Ιωάννης Αποστολάτος](https://github.com/sdi1900012)

### Πίνακας περιεχομένων:
1. Introduction

2. Frontend

    2.1. Welcome page interface

    2.2.User interface

    2.2.1. Seller interface

    2.2.2. Bidder interface

    2.2.3. Message interface

    2.3. Admin interface


### 1.Introduction
Ο στόχος της εργασίας ήταν να δημιουργηθεί μια διαδικτυακή εφαρμογή η οποία προσομοίαζε την γνωστή εφαρμογή δημοπρασιών ebay. Για το frontend χρησιμοποιήθηκε angular ενώ στο backend για την δημιουργία της βάσης (tables) έγινε χρήση sql και η σύνδεση της βάσης με το frontend πραγματοποιήθηκε με το springboot. Στην εργασία έχει υλοποιήθει και security (SSL/JWT).

### 2.Frontend

#### 2.1 Welcome page interface

Στην αρχική σελίδα ο χρήστης έχει την επιλογή για είσοδο στην εφαρμογή ή για την δημιουργία καινούργιου λογαριασμού. Ανάλογα με την κατάστασή του θα εισέλθει σε διαφορετικό interface.

#### 2.2 User interface

Κατά την είσοδο του ο χρήστης μπορεί να γίνει είτε πωλητής είτε πλειοδότης (αν δεν είναι ήδη) ή να βλέπει ως επισκέπτης (guest) τα διάφορα αντικείμενα που είναι προς πώληση. Μπορεί επίσης να βλέπει τις πληροφορίες του λογαριασμού του. Τέλος, μπορεί να  μεταβεί στην σελίδα των μηνυμάτων. Εαν έχει νέα μηνύματα εμφανίζεται  κατάλληλη ένδειξη ειδοποίησης.

#### 2.2.1 Seller interface

Στη σελίδα του πωλητή αρχικά εμφανίζονται οι ενεργές δημοπρασίες του χρήστη καθώς και αυτές που ακόμα δεν έχουν ξεκινήσει. Επίσης μπορεί να δει τις παλαιότερες δημοπρασίες, ή να δημιουργήσει κάποια καινούρια. Από τη λίστα με τις παλαιότερες δημοπρασίες, ο πωλητής έχει τη δυνατότητα να δει αναλυτικά τις προσφορές ενός αντικειμένου καθώς και να στείλει μήνυμα στον νικητή κάποιας δημοπρασίας.

#### 2.2.2 Bidder interface

Στη σελίδα του πλειοδότη εμφανίζονται αρχικά όλες οι ενεργές δημοπρασίες στις οποίες μπορεί να κάνει προσφορά. Εκεί δίνεται και η επιλογή στον πλειδότη να φιλτράρει τις ενεργές δημοπρασίες και να εμφανίσει συγκεκριμένες με βάση το όνομα,κατηγορία, περιγραφή και τιμή. Μπορεί επίσης να δει τις κερδισμένες του δημοπρασίες και να στείλει 	μηνύματα στους πωλητές.

#### 2.2.3 Message interface

Ο χρήστης μπορεί να δει όλα τα εισερχόμενα μηνύματά του, να τα διαβάσει, να τα σβήσει ή να απαντήσει στον αποστολέα.Τα μη διαβασμένα μηνύματα εμφανίζονται με την κατάλληλη ένδειξη. Επίσης μπορεί να φιλτράρει να μηνύματα με βάση το όνομα του αποστολέα. Τέλος μπορεί να δει ή να σβήσει τα μηνυμάτα που ο ίδιος έχει στείλει.

#### 2.3 Admin interface

Kατά την είσοδό του ο admin βρίσκει την επιλογή εξαγωγής των στοιχείων των δημοπρασιών σε μορφή JSON και XML. Μπορεί να δει τους εγγεγραμμένους χρήστες  καθώς και να δεχτεί ή να απορρίψει χρήστες οι οποίοι έχουν κάνει αίτημα εγγραφής. Τέλος μπορεί να ενημερώσει τα στοιχεία των χρηστών αλλά και να διαγράψει τους χρήστες από την βάση αν δεν έχουν ακόμα δημιουργήσει κάποια δημοπρασία ή δεν έχουν υποβάλλει ακόμα προσφορές.
