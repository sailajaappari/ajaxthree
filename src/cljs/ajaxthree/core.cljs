(ns ajaxthree.core
    (:require [reagent.core :as r]
              [ajax.core :as ajax]))

(enable-console-print!)

(def loaded-stuff (r/atom nil))

(def contacts (r/atom ["Contact1" "Contact2" "Contact3"]))

(defn handleClick [evt]
  (ajax/GET "/get-clicks"
              {:handler (fn [data]
                          (reset! loaded-stuff (get data :message)))}))
(defn add-contact [c]
  (swap! contacts conj c))

(defn new-contact []
  (let [val (r/atom "")]
    (fn []
      [:div
       [:input {:type "text"
                :placeholder "Contact Name"
                :value @val
                :on-change #(reset! val (-> % .-target .-value))}]
       [:button {:on-click #(when-let [c @val]
                              (add-contact! c)
                              (reset! val ""))}
        "Add"]]))
  )

(defn contact [c]
  [:li
   [:span (str c)]])

(defn contact-list []
  (fn []
  [:div
   [:h1 "Contact List"]
   [:ul
    (for [c @contacts]
      [contact c])]]))

(defn root-component []
  (ajax/GET "/load-stuff"
              {:handler (fn [data]
                          (reset! loaded-stuff data))})
    (fn []
      [:div
       [:h1 "Hello world! How r u"]
       [:span "Loaded stuff in the background:" (str @loaded-stuff)]
       [:button {:on-click handleClick} "Click Me"]
       [:br]
       [new-contact]
       [:div
         [:h1 "Contact List"]
         [:ul
          (for [c @contacts]
            [contact c])]]
       ]
      ))

(defn ^:export main []
  (r/render-component
   [root-component]
   (js/document.getElementById "app")))

