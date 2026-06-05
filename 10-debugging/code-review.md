## Code Review Exercise

Write your code review here in markdown format. 


Code Review
Issue #1: Form Functionality

The issue, why this is an issue, and the solution:

The submit and reset buttons are outside of the <form> element. This is an issue because the buttons are not directly connected to the form, so the submit button may not submit the form data and the reset button may not clear the form fields correctly. To fix this issue, move the submit and reset buttons inside the form before the closing </form> tag.

Initial code:

```html
</form>
<div class="form space-evenly-distributed-row-container form-buttons-container">
  <input class="form-button" type="submit" value="submit" />
  <input class="form-button" type="reset" value="reset" />
</div>
```
Updated code:

```html
<div class="form space-evenly-distributed-row-container form-buttons-container">
  <input class="form-button" type="submit" value="submit" />
  <input class="form-button" type="reset" value="reset" />
</div>
</form>
```
Issue #2: Semantic HTML

The issue, why this is an issue, and the solution:

The “More Info” and “Load New Cats Facts” controls are written as a tags, but they do not have href attributes. This is an issue because links should be used for navigation, while buttons should be used for actions. To fix this issue, replace these anchor tags with button elements.

Initial code:
```html
<a class="more-info-button">More Info</a>
<a class="reload-cat-facts">Load New Cats Facts</a>
```
Updated code:

```html
<button class="more-info-button" type="button">More Info</button>
<button class="reload-cat-facts" type="button">Load New Cat Facts</button>
```


Issue #3: Loading Animation Bug

The issue, why this is an issue, and the solution:

The loading container gets hidden by replacing its class with display-none. This is an issue because when the user clicks to reload cat facts, the loading container may still be hidden and the loading animation may not appear again. To fix this issue, use classList.add() and classList.remove() instead of replacing the full class.

Initial code:

```html
const loading = document.querySelector('.loading-container');
loading.setAttribute('class', 'display-none');
```
Updated code:

```html
const loading = document.querySelector('.loading-container');
loading.classList.add('display-none');
```

Then before loading starts:

loading.classList.remove('display-none');


Issue #4: API Error Handling

The issue, why this is an issue, and the solution:

If the cat facts API fails, the error only appears in the console. This is an issue because the user will not know what went wrong. The page may look broken or empty. To fix this issue, show an error message on the page when the fetch request fails.

Initial code:
```html
} catch (error) {
  console.error('Error fetching cat facts:', error);
}
```
Updated code:

```html
} catch (error) {
  console.error('Error fetching cat facts:', error);

  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'Could not load cat facts. Please try again.';
  catFactsList.append(errorMessage);
}

```


